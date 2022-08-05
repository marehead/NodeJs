const os = require(`os`);

setInterval(() => {
  const {arch, platform, totalmem, freemen } = os;
  const tRam = totlmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = (fRam / tRam) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRam)} MB`,
    FreeRAM: `${parseInt(tRam)} MB`,
    Usage: `${usage.toFixed{2}} %`
  };

  console.clear();
  console.log(stats);
  exports.stats = stats;
  }, 1000);

