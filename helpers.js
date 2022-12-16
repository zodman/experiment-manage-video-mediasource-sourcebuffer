      function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
          sizes[i]
        }`;
      }

      function logMediaInfo() {
      const video = document.querySelector("video");
        console.group("info");
        console.log(
          `> Seekable time ranges: ${timeRangesToString(video.seekable)}`
        );
        console.log(
          `> Buffered time ranges: ${timeRangesToString(video.buffered)}`
        );
        console.log(`> MediaSource duration: ${mediaSource.duration}`);
        console.groupEnd("info");
      }

      function timeRangesToString(ranges) {
        var s = "{";
        for (var i = 0; i < ranges.length; ++i) {
          s +=
            " [" +
            ranges.start(i).toFixed(3) +
            ", " +
            ranges.end(i).toFixed(3) +
            ")";
        }
        return s + " }";
      }

      function fDec(start) {
        return String(start).replace(/(.)(?=(\d{3})+$)/g,'$1,');
      }
