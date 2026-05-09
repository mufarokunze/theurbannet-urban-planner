CREATE DATABASE IF NOT EXISTS urban_planner_db;

USE urban_planner_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE service_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(150) NOT NULL,
    owner_name VARCHAR(100),
    location VARCHAR(100) NOT NULL,
    description TEXT,
    rating DECIMAL(2,1) DEFAULT 0.0,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE provider_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    category_id INT NOT NULL,
    service_name VARCHAR(150) NOT NULL,
    price_min DECIMAL(10,2),
    price_max DECIMAL(10,2),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (provider_id) REFERENCES providers(id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id) REFERENCES service_categories(id)
        ON DELETE CASCADE
);

CREATE TABLE plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    plan_name VARCHAR(150) NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_location VARCHAR(100) NOT NULL,
    event_date DATE,
    budget DECIMAL(10,2),
    status ENUM('draft', 'saved', 'completed') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE plan_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_id INT NOT NULL,
    category_id INT NOT NULL,
    provider_id INT,
    provider_service_id INT,
    notes TEXT,
    item_order INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (plan_id) REFERENCES plans(id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id) REFERENCES service_categories(id)
        ON DELETE CASCADE,

    FOREIGN KEY (provider_id) REFERENCES providers(id)
        ON DELETE SET NULL,

    FOREIGN KEY (provider_service_id) REFERENCES provider_services(id)
        ON DELETE SET NULL
);