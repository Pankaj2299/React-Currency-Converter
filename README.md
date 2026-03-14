# 💱 React Currency Converter

A modern **Currency Exchange Rate Converter** built with **React.js** and **Tailwind CSS**.
This application fetches **real-time exchange rates from a currency API** and allows users to convert between different currencies instantly.

The app also displays **country flags based on selected currency codes**, making the interface more visual and user-friendly.

---

## 🚀 Features

* 🌍 **Live Exchange Rates** – Fetches real-time currency data using an API
* 💱 **Instant Currency Conversion** – Convert between any two currencies
* 🏳 **Country Flag Display** – Automatically updates flags for selected currencies
* ⚡ **Fast & Modern UI** – Built with React and styled using Tailwind CSS
* ♻ **Reusable Components** – Modular component-based architecture
* 📱 **Responsive Design** – Works on mobile, tablet, and desktop devices

---

## 🛠️ Tech Stack

* **React.js** – Frontend JavaScript library
* **Tailwind CSS** – Utility-first CSS framework
* **JavaScript (ES6+)** – Application logic
* **Fetch API** – Fetching live exchange rate data
* **Currency Exchange Rate API** – Provides real-time currency data

---

## ⚡ React Concepts Used

This project demonstrates several important **React development concepts**:

* React Hooks
* Custom Hooks
* Reusable Components
* API Integration
* State Management
* Dynamic Rendering

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── InputBox.jsx        # Reusable component for currency input
│
├── hooks/
│   └── useCurrencyInfo.js  # Custom hook for fetching currency data
│
├── constants/
│   └── countryFlags.js     # Currency codes mapped to country flags
│
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
└── index.css               # Global styles with Tailwind CSS
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Pankaj2299/React-Currency-Converter.git
```

### 2. Navigate to the Project Folder

```bash
cd react-currency-converter
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

```
http://localhost:5173
```

---

## 📖 How to Use

1. Open the application in your browser
2. Select the **base currency**
3. Select the **target currency**
4. Enter the **amount to convert**
5. Click **Get Exchange Rate**
6. The app will fetch the **latest exchange rate** and display the converted value
7. Country flags will automatically update based on selected currencies

---

## 🌐 API Used

This project uses a free currency exchange API to fetch real-time exchange rates.

API Endpoint:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json

Example:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

This endpoint returns exchange rates for the selected base currency in JSON format.

The `{currency}` parameter is dynamic and changes based on the selected base currency in the application.

Data Source: https://github.com/fawazahmed0/currency-api

## 👨‍💻 Author

**Pankaj Kumar**

📧 Email: Pankajkumar199922@gmail.com
<br>
🔗 GitHub: https://github.com/Pankaj2299
<br>
🔗 LinkedIn: https://www.linkedin.com/in/pankaj-kumar-4b3276266

---

## ⭐ Support

If you like this project, please consider **starring ⭐ the repository**.
It helps others discover the project and motivates further development.

---

