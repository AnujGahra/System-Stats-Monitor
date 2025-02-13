```markdown
# System Stats Monitor

## Overview

This **System Stats Monitor** is a Node.js application that provides real-time monitoring of your system's CPU and memory usage, displayed directly in the terminal with colorful and easy-to-read formatting. The application is built using the `os` module and leverages the `chalk` library for enhanced terminal output.

## Features

- **CPU Usage Monitoring**:
  - Tracks usage for each CPU core.
  - Displays usage in percentage (%).

- **Memory Usage Monitoring**:
  - Shows used and total memory in GB.
  - Color-coded output:
    - **Green**: Memory usage is within a safe range.
    - **Red**: Memory usage exceeds a critical threshold (greater than 7 GB).

- **Real-Time Updates**:
  - The stats are updated every second for real-time insights.

## How to Use

### Prerequisites

Ensure you have **Node.js** installed on your system. If not, download and install it from [Node.js Official Website](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/system-stats-monitor.git
   ```

2. Navigate to the project directory:
   ```bash
   cd system-stats-monitor
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Run the Application

To start monitoring your system stats, run:
```bash
node monitor.js
```

The terminal will display real-time CPU and memory usage statistics.

## Example Output

```
======== System Stats ==========
┌─────────┬──────┬────────────┐
│ (index) │ core │   usage    │
├─────────┼──────┼────────────┤
│    0    │  0   │   12.3%    │
│    1    │  1   │   15.7%    │
│    2    │  2   │   10.1%    │
│    3    │  3   │   14.8%    │
└─────────┴──────┴────────────┘
Memory used: 4.56 GB / 16.00 GB
```

- CPU usage is displayed in a table, showing the percentage usage for each core.
- Memory usage is displayed in GB with color coding for better visibility.

## File Structure

```plaintext
.
├── monitor.js        # Main script for the system stats monitor
├── package.json      # Project dependencies
```

## Technologies Used

- **Node.js**: Backend runtime environment for building the CLI tool.
- **os module**: Native Node.js module to fetch system stats like CPU and memory.
- **chalk**: Library for adding colors and styles to terminal output.

## How It Works

1. The application takes a CPU snapshot using `os.cpus()`.
2. After 1 second, it takes another snapshot and calculates the difference to determine CPU usage for each core.
3. Memory usage is calculated by comparing total and free memory, retrieved using `os.totalmem()` and `os.freemem()`.
4. The stats are displayed in the terminal with color-coded outputs.
5. The process repeats every second using `setInterval()`.

## Contributing

Contributions are welcome! If you’d like to improve the application or add new features:
1. Fork this repository.
2. Create a new branch.
3. Make your changes and submit a pull request.

