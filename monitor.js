import chalk from "chalk";
import os from "node:os";

function Monitor() {
  // Take a snapshot
  const oldCpus = os.cpus();

  // take another snapshot after a second
  setTimeout(() => {
    const newCpus = os.cpus();

    // Calculate CPU usage for each core
    const usage = newCpus.map((cpu, i) => {
      return {
        core: i,
        usage: calculateCPU(oldCpus[i], newCpus[i]) + "%",
      };
    });

    console.clear();
    console.log(chalk.bgMagenta("======== System Stats =========="));

    // Display CPU usage
    console.table(usage);

    // Calculate memory usage
    const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
    const totalMemory = os.totalmem() / (1024 * 1024 * 1024);

    // Display memory usage with color coding
    console.log(
      "Memory used:",
      usedMemory > 7
        ? chalk.redBright(
            `${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`
          )
        : chalk.greenBright(
            `${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`
          )
    );
  }, 1000);
}

function calculateCPU(oldCpus, newCpus) {
  // Calculate total time for the old and new snapshots
  const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);

  // Calculate idle and total differences
  const idle = newCpus.times.idle - oldCpus.times.idle;
  const total = newTotal - oldTotal;

  // Calculate used CPU time
  const used = total - idle;

  // Return percentage of CPU used
  return ((100 * used) / total).toFixed(1);
}

// Run the monitor function at regular intervals
setInterval(Monitor, 1000);

// 1:41:40
