# CRB-UI

CRB-UI is a React component library to be used in crossriver bank React apps.

## Installation

```bash
npm install crb-ui
```

## Usage

All components in this library rely on the Fira Sans font family.  
Insert the following link tags into the head of index.html.

```html
<head>
  ...
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  ...
</head>
```

Many of the components rely on Ant Design.

Install antd
```bash
npm install antd
```
Insert the following import in index.tsx

```javascript
import 'antd/dist/antd.css';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
