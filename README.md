# ITX Frontend Test

A modern Mobile Store Application built with **React**, **TypeScript**, and **Webpack**, following **Hexagonal Architecture** principles.

## 🚀 Features

- **Product List Page (PLP)**: Grid layout with search functionality and responsive design.
- **Product Details Page (PDP)**: Detailed view with image, description, and add-to-cart options.
- **Shopping Cart**: Persistent cart counter that accumulates items.
- **Client-Side Caching**: 1-hour TTL cache for API requests to optimize performance.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript
- **Build Tool**: Webpack 5 (configured from scratch)
- **Styling**: Native CSS (no frameworks)
- **State Management**: React Context + LocalStorage
- **Testing**: Jest, React Testing Library, Cypress
- **Architecture**: Hexagonal (Ports & Adapters)

## 🏗️ Architecture

The application implements **Hexagonal Architecture** to decouple business logic from the UI and infrastructure:

```
src/
├── core/                            # Domain + Application layers (framework-agnostic)
│   ├── product/                     # Product domain module
│   ├── cart/                        # Cart domain module
│   └── shared/                      # Shared kernel (e.g., Cache)
├── features/                        # UI Feature modules (Adapters)
│   ├── product-list/                # PLP components & hooks
│   └── product-detail/              # PDP components & hooks
├── ui/                              # Shared UI components (Atoms/Molecules)
└── app/                             # Application composition root
```

## 📦 Installation

Prerequisites: Node.js >= 14, npm >= 6

```bash
# Install dependencies
npm install
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Builds the application for production to `dist/` |
| `npm test` | Runs unit tests with Jest |
| `npm run cypress:run` | Runs E2E tests with Cypress (requires app running) |
| `npm run lint` | Runs ESLint to check code quality |

## 🧪 Testing

### Unit Tests
Run the Jest test suite:
```bash
npm test
```

### End-to-End Tests
1. Start the application:
   ```bash
   npm start
   ```
2. In a separate terminal, run Cypress:
   ```bash
   npm run cypress:run
   ```

## 📝 License
ISC
