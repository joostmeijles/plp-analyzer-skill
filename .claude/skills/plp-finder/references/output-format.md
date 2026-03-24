# PLP Finder Output Format

## JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["url", "productCount", "depth", "isNavLinked", "googleScore", "structuralScore", "combinedScore"],
    "properties": {
      "url": {
        "type": "string",
        "format": "uri",
        "description": "Absolute URL of the Product Listing Page"
      },
      "productCount": {
        "type": "integer",
        "minimum": 0,
        "description": "Number of product items detected on the page via HTML pattern matching. 0 if the site is JavaScript-rendered."
      },
      "depth": {
        "type": "integer",
        "minimum": 1,
        "description": "URL path depth (number of path segments). Depth 1 = top-level category, depth 2 = subcategory, etc."
      },
      "isNavLinked": {
        "type": "boolean",
        "description": "True if this URL was found in the site's primary navigation (nav/header elements)"
      },
      "googleScore": {
        "type": "integer",
        "minimum": 0,
        "description": "Sum of (11 - position) for each appearance of this URL across Google search queries. Higher = more prominent in organic search."
      },
      "structuralScore": {
        "type": "integer",
        "minimum": 0,
        "description": "Score from nav-linking, depth, and product count signals: (productCount*2) + (isNavLinked?30:0) + (depth==1?20:depth==2?10:0)"
      },
      "combinedScore": {
        "type": "integer",
        "minimum": 0,
        "description": "structuralScore + googleScore. Primary sort key for ranking PLPs."
      }
    }
  }
}
```

## Example Output

```json
[
  {
    "url": "https://example.com/collections/shoes",
    "productCount": 48,
    "depth": 2,
    "isNavLinked": true,
    "googleScore": 19,
    "structuralScore": 40,
    "combinedScore": 59
  },
  {
    "url": "https://example.com/collections/mens-shoes",
    "productCount": 24,
    "depth": 3,
    "isNavLinked": false,
    "googleScore": 8,
    "structuralScore": 0,
    "combinedScore": 8
  },
  {
    "url": "https://example.com/collections/all",
    "productCount": 312,
    "depth": 2,
    "isNavLinked": true,
    "googleScore": 0,
    "structuralScore": 664,
    "combinedScore": 664
  }
]
```

## Field Notes for Downstream Agents

- **url**: Always absolute. Safe to pass directly to a browser or HTTP client.
- **productCount**: Derived from HTML class/attribute matching — use as a relative signal, not a precise count. 0 means the site is JavaScript-rendered or uses non-standard markup.
- **depth**: Use to distinguish top-level categories (depth 1–2) from subcategories (depth 3+). Lower depth = broader category.
- **isNavLinked**: High-signal indicator of category importance. Nav-linked PLPs are typically the site's primary merchandising categories.
- **googleScore**: Independent organic search signal. A page scoring > 10 is ranking prominently for at least one relevant query. Use this to identify pages Google already considers authoritative.
- **structuralScore**: Internal site signal only — based on nav placement, depth, and product density.
- **combinedScore**: Primary sort key. Use this for all downstream prioritisation.

## Sorting Convention

Results are sorted by `combinedScore` descending. For ties, shallower `depth` ranks higher.

## Consumption Pattern

```python
import json

plps = json.loads(plp_finder_output)

# Top 5 by combined score (already sorted)
top5 = plps[:5]

# Nav-linked root categories only
top_nav = [p for p in plps if p["isNavLinked"] and p["depth"] <= 2]

# Pages with strong Google signal (organically prominent)
google_strong = [p for p in plps if p["googleScore"] >= 10]
```
