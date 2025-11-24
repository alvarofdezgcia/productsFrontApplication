# ITX Frontend Test

Mobile Store Application built with React, TypeScript, and Webpack.

## Features
- Product List Page (PLP) with search and grid layout.
- Product Details Page (PDP) with specifications and add-to-cart functionality.
- Client-side caching (1 hour expiration).
- Persistent cart count.
- Responsive design.

## Tech Stack
- React 18
- TypeScript
- Webpack
- Native CSS (No frameworks)
- Jest + React Testing Library
- Cypress

## Architecture

The application follows **Hexagonal Architecture** (Ports & Adapters):

```
src/
├── core/                            # Domain + Application layers (framework-agnostic)
│   ├── product/
│   │   ├── domain/
│   │   │   ├── Product.ts           # Domain entities
│   │   │   └── ProductRepository.ts # Repository interface (output port)
│   │   ├── application/
│   │   │   ├── GetProductList.ts    # Use case
│   │   │   ├── GetProductDetail.ts  # Use case
│   │   │   └── SearchProducts.ts    # Use case
│   │   └── infrastructure/
│   │       └── ApiProductRepository.ts  # Repository implementation (adapter)
│   ├── cart/
│   │   ├── domain/
│   │   │   ├── Cart.ts              # Domain entities
│   │   │   └── CartRepository.ts    # Repository interface (output port)
│   │   ├── application/
│   │   │   └── AddToCart.ts         # Use case
│   │   └── infrastructure/
│   │       └── ApiCartRepository.ts # Repository implementation (adapter)
│   └── shared/
│       └── infrastructure/
│           └── LocalStorageCache.ts # Shared infrastructure
├── features/                        # Feature-specific UI (input adapters)
│   ├── product-list/
│   │   ├── pages/
│   │   │   └── ProductListPage.tsx
│   │   ├── components/
│   │   │   └── ProductItem.tsx
│   │   └── hooks/
│   │       └── useProducts.ts
│   └── product-detail/
│       ├── pages/
│       │   └── ProductDetailPage.tsx
│       ├── components/
│       │   ├── ProductInfo.tsx
│       │   └── ProductActions.tsx
│       └── hooks/
│           └── useProductDetail.ts
├── ui/                              # Shared UI components
│   ├── components/
│   │   ├── Header/
│   │   ├── Breadcrumbs/
│   │   └── SearchBar/
│   └── layout/
│       └── MainLayout.tsx
└── app/                             # Application setup
    ├── context/
    │   └── CartContext.tsx          # Global state management
    ├── App.tsx                      # Router configuration
    └── index.tsx                    # Entry point
```

### Key Design Decisions

- **Domain Layer**: Pure TypeScript with zero React dependencies, ensuring business logic is framework-agnostic
- **Repository Pattern**: Abstracts data access through interfaces, enabling easy testing and swapping implementations
- **Use Cases**: Business logic encapsulated in single-responsibility use case classes
- **Client-Side Caching**: Implements 1-hour TTL cache using LocalStorage to reduce API calls and improve performance
- **Graceful Degradation**: Returns user-friendly error messages when API calls fail
- **Separation of Concerns**: Clear boundaries between domain logic, infrastructure, and UI layers

## Prerequisites
- Node.js >= 14
- npm >= 6

## Installation
```bash
npm install
```

## Scripts

- **Start Development Server**:
  ```bash
  npm start
  ```
  Runs the app at `http://localhost:3000`.

- **Build for Production**:
  ```bash
  npm run build
  ```
  Outputs to `dist/`.

- **Run Unit Tests**:
  ```bash
  npm test
  ```

- **Run E2E Tests**:
  ```bash
  npm run cypress:open
  # or
  npm run cypress:run
  ```

- **Lint Code**:
  ```bash
  npm run lint
  ```
