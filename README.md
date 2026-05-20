# School Management API

A production-ready Node.js REST API built for the **Educase** assignment. This application manages school data, allowing users to add new schools and fetch a list of schools sorted by proximity to a specific user geographic location.

---

## 🚀 Features

* **Add School Endpoint:** Validates and stores school information (name, address, latitude, longitude).
* **List Schools Endpoint:** Retrieves all schools from the database and dynamically sorts them based on their geo-code distance from the user's current location.
* **Input Validation:** Robust error handling and request payload validation using Joi.
* **Geospatial Calculation:** Utilizes the Haversine formula to compute accurate real-world distances.

---

## 🛠️ Tech Stack

* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database:** MySQL 
* **Environment Variables:** dotenv

---

## 📋 API Endpoints

### 1. Add School
Adds a new school record to the database.

* **URL:** `/addSchool`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
    ```json
    {
      "name": "xyz school",
      "address": "Tamilnaud, india",
      "latitude": 40.7128,
      "longitude": -74.0060
    }
    ```
* **Success Response (201 Created):**
    ```json
    {
      "message": "School added successfully.",
      "schoolId": 1
    }
    ```

### 2. List Schools
Fetches all schools sorted by proximity to the provided coordinates.

* **URL:** `/listSchools`
* **Method:** `GET`
* **Query Parameters:**
    * `latitude` (double, Required) - User's current latitude
    * `longitude` (double, Required) - User's current longitude
    * *Example:* `/listSchools?latitude=40.7306&longitude=-73.9352`
* **Success Response (200 OK):**
    ```json
    [
      {
        "id": 1,
        "name": "xyz school",
        "address": "tamilnadu, india",
        "latitude": 40.7128,
        "longitude": -74.0060,
      }
    ]
    ```

---


### Tech Stack
* Node.js
* Express.js
* MySQL database

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/murali0127/Node.js_School_Management_API.git](https://github.com/murali0127/Node.js_School_Management_API.git)
   cd Node.js_School_Management_API
