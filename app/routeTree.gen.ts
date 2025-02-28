/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as RecipesImport } from './routes/recipes'
import { Route as MenusImport } from './routes/menus'
import { Route as GroceryListImport } from './routes/grocery-list'
import { Route as ExploreImport } from './routes/explore'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const RecipesRoute = RecipesImport.update({
  id: '/recipes',
  path: '/recipes',
  getParentRoute: () => rootRoute,
} as any)

const MenusRoute = MenusImport.update({
  id: '/menus',
  path: '/menus',
  getParentRoute: () => rootRoute,
} as any)

const GroceryListRoute = GroceryListImport.update({
  id: '/grocery-list',
  path: '/grocery-list',
  getParentRoute: () => rootRoute,
} as any)

const ExploreRoute = ExploreImport.update({
  id: '/explore',
  path: '/explore',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/explore': {
      id: '/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof ExploreImport
      parentRoute: typeof rootRoute
    }
    '/grocery-list': {
      id: '/grocery-list'
      path: '/grocery-list'
      fullPath: '/grocery-list'
      preLoaderRoute: typeof GroceryListImport
      parentRoute: typeof rootRoute
    }
    '/menus': {
      id: '/menus'
      path: '/menus'
      fullPath: '/menus'
      preLoaderRoute: typeof MenusImport
      parentRoute: typeof rootRoute
    }
    '/recipes': {
      id: '/recipes'
      path: '/recipes'
      fullPath: '/recipes'
      preLoaderRoute: typeof RecipesImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/explore': typeof ExploreRoute
  '/grocery-list': typeof GroceryListRoute
  '/menus': typeof MenusRoute
  '/recipes': typeof RecipesRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/explore': typeof ExploreRoute
  '/grocery-list': typeof GroceryListRoute
  '/menus': typeof MenusRoute
  '/recipes': typeof RecipesRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/explore': typeof ExploreRoute
  '/grocery-list': typeof GroceryListRoute
  '/menus': typeof MenusRoute
  '/recipes': typeof RecipesRoute
  '/settings': typeof SettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/explore'
    | '/grocery-list'
    | '/menus'
    | '/recipes'
    | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/explore' | '/grocery-list' | '/menus' | '/recipes' | '/settings'
  id:
    | '__root__'
    | '/'
    | '/explore'
    | '/grocery-list'
    | '/menus'
    | '/recipes'
    | '/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ExploreRoute: typeof ExploreRoute
  GroceryListRoute: typeof GroceryListRoute
  MenusRoute: typeof MenusRoute
  RecipesRoute: typeof RecipesRoute
  SettingsRoute: typeof SettingsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ExploreRoute: ExploreRoute,
  GroceryListRoute: GroceryListRoute,
  MenusRoute: MenusRoute,
  RecipesRoute: RecipesRoute,
  SettingsRoute: SettingsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/explore",
        "/grocery-list",
        "/menus",
        "/recipes",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/explore": {
      "filePath": "explore.tsx"
    },
    "/grocery-list": {
      "filePath": "grocery-list.tsx"
    },
    "/menus": {
      "filePath": "menus.tsx"
    },
    "/recipes": {
      "filePath": "recipes.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
