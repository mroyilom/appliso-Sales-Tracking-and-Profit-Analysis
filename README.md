# Sales Tracking and Profit Analysis

This project is a simple Point of Sale (POS) and profit tracking app built with **Google Sheets** and **Google Apps Script**.  
It runs as a web app connected to a Google Sheet, making it easy to manage sales, payments, and profit analysis without external servers.

---

## Features
- Manage products with SKU, name, price, category, and stock.
- Record and save sales transactions.
- Automatic calculation of subtotal, tax (7.5%), and grand total.
- Save payment details linked to each sale.
- Simple one-page web interface.

---

## File List
- `Code.gs` – Google Apps Script backend logic. Handles data retrieval and saving between Google Sheets and the web app.  
- `index.html` – Frontend interface. Displays product list, allows input of quantities, and calculates totals in real time.

---

## Setup Instructions

1. **Prepare Google Sheet**
   - Create a new Google Spreadsheet.
   - Add three sheets:
     - `Items` → Columns: SKU, Name, Price, Category, Stock
     - `Sales` → Columns: Date, SKU, Name, Price, Qty, Total
     - `Payments` → Columns: Date, Method, Amount, Invoice, Notes

2. **Add Apps Script**
   - Go to `Extensions > Apps Script` in the spreadsheet.
   - Create a file `Code.gs` and paste the backend code.
   - Create a file `index.html` and paste the web interface code.

3. **Deploy Web App**
   - In Apps Script, click `Deploy > New deployment`.
   - Choose `Web App`.
   - Set **Who has access** to “Anyone with link”.
   - Copy the generated URL.

4. **Start Using**
   - Open the web app URL.
   - Select items, enter quantities, and the system will calculate totals.
   - Save order to log transactions and payments in the sheet.

---

## Example Workflow
1. Add your product list into the `Items` sheet.  
2. Open the deployed web app.  
3. Enter sales quantities for each product.  
4. Subtotal, tax, and grand total will update instantly.  
5. Save the order, and all sales plus payment details are stored in the sheet.  

---

## Sample Commands
These commands are run inside Apps Script console:

```javascript
// Test data fetch
getData();

// Save a dummy order
setData(JSON.stringify({
  order: [[new Date(), "001", "Test Product", 100, 2, 200]],
  payment: [[new Date(), "Cash", 200, "INV001", ""]]
}));
