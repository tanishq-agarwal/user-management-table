# User Management Table  

This project is a React-based user management table that allows sorting, filtering, and pagination of user data. It is built using `@tanstack/react-table` for advanced table features and `Next.js` for server-side rendering. It features:   
- **Global Search**: Search through all table data.  
- **Pagination**: Navigate through paged data.  
- **Sorting**: Allows users to sort data by column (ascending/descending). 

## Table of Contents  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Instructions to Run Locally](#instructions-to-run-locally)  
- [Project Approach](#project-approach)  
- [Challenges Faced](#challenges-faced)  

## Features  
1. **Search**: Filter the table by entering a keyword.  
2. **Pagination**: View paginated results for large datasets.  
3. **Dynamic Sorting**: Click on column headers to sort data in ascending/descending order.  

---

## Getting Started  
Follow these instructions to set up the project on your local machine for development and testing.  

---

## Instructions to Run Locally  

### Prerequisites  
1. **Node.js**: Ensure Node.js is installed on your machine. Download it [here](https://nodejs.org/).  
2. **npm or Yarn**: Comes bundled with Node.js (for npm).  

### Steps  
1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/your-username/user-management-table.git  
   cd user-management-table  
   ```
2. **Install dependencies**  
   ```bash  
    npm install  
    # or  
    yarn install 
    ```     

3. **Start the development server**  
   ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Approach

### How It Works
1. **Data Fetching:**

- The project fetches user data using the useUsers custom hook. It handles data loading, error states, and pagination.

2. **Table Functionality:**

- The table is powered by @tanstack/react-table, offering modular and customizable features.
- Sorting and filtering are implemented using controlled states (sorting and globalFilter).
- Pagination is handled via query parameters (?page=X) to support server-side or dynamic routing.

3. **Component Structure:**

- **UserTable.js:** The main component managing the table and its logic.
- **StyledTable.js:** A presentational component responsible for rendering the table UI.
- **constants.js:** Contains column definitions for the table.

## Challenges Faced
**Sorting Logic Not Triggering**
The sorting logic initially wasn’t working due to:

- Missing onSortingChange handler in the useReactTable configuration.
- Incorrect use of the getToggleSortingHandler() function.

**Pagination Handling**
Implementing dynamic pagination using Next.js routing required syncing the page query parameter with the useUsers hook, ensuring smooth transitions without breaking the UI.

## Dependencies
- **React:** Component-based user interfaces.
- **Next.js:** Server-side rendering and routing.
- **@tanstack/react-table:** Advanced table features.
- **Tailwind CSS:** Utility-first styling.
