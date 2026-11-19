# Laptop Inventory and Specifications

## Product Images - Organization Guide

The following laptop images should be organized in the `laptops new/` folder:

### ASUS Products
- **asus1.png** - ASUS VivoBook 15 (Gradient colors model)
  - Price: ₦245,000
  - Specs: 15.6" FHD | i5-1135G7 | 8GB RAM | 512GB SSD
  
- **asus2.png** - ASUS VivoBook 14 (Gray/Silver model)
  - Price: ₦228,000
  - Specs: 14" FHD | Ryzen 5 | 8GB RAM | 256GB SSD
  
- **asus3.png** - ASUS VivoBook Pro 15 (Premium model with design software)
  - Price: ₦375,000
  - Specs: 15.6" OLED | i7-1255U | 16GB RAM | 512GB SSD
  
- **asus4.png** - ASUS ProArt Designer (Workstation model with display tools)
  - Price: ₦425,000
  - Specs: 15.6" 4K | RTX 3050 | 16GB RAM | 1TB SSD

### Lenovo Products
- **thinkpad.png** - Lenovo ThinkPad (Professional black model)
  - Price: ₦350,000
  - Specs: 14" FHD | i5-1135G7 | 16GB RAM | 512GB SSD
  
- **lenovo-standard.png** - Lenovo IdeaPad 5 (Standard silver model)
  - Price: ₦235,000
  - Specs: 15.6" FHD | Ryzen 5 | 8GB RAM | 512GB SSD

### Dell Products
- **dell-xps.png** - Dell XPS 15 Plus (Premium model with OLED display)
  - Price: ₦445,000
  - Specs: 15.3" OLED | i7-1365U | 16GB RAM | RTX 4060

### HP Products
- **hp-workstation.png** - HP ZBook G8 Workstation (Professional workstation)
  - Price: ₦485,000
  - Specs: 15.6" FHD | i7-11800H | 32GB RAM | RTX A2000

### Apple Products
- **macbook.png** - MacBook Pro 16" (Professional laptop)
  - Price: ₦1,250,000
  - Specs: 16" Liquid Retina | M3 Pro | 16GB Unified Memory | 512GB SSD

## Implementation Notes

### Filter Categories
- all (default)
- acer
- asus (NEW)
- dell
- hp
- lenovo
- apple (NEW)
- usb
- memory
- reader
- ringlight

### Slider Features
- Auto-advances every 5 seconds
- Manual navigation with Previous/Next buttons
- Dot indicators for quick navigation
- Responsive design

### Product Card Features
- Brand badge with gradient background
- Product name
- Price in Nigerian Naira (₦)
- Spec tags showing key features
- Hover effect with zoom animation
- Lazy loading images for performance

## Image File Format Guidelines
- Format: PNG or JPG
- Recommended dimensions: 400x300px or higher (aspect ratio 4:3)
- Size: Optimized for web (under 200KB per image)
- Quality: High quality product photos

## Database Integration Ready
The product structure is designed to be easily converted to:
- JSON database
- SQL database
- Firebase/Cloud Firestore
- Headless CMS integration

Each product contains:
- ID (model name)
- Brand (category)
- Name
- Price
- Specs array
- Image source
