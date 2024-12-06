<template>
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ffffff; stop-opacity:1" />
            <stop offset="25%" style="stop-color:#c0c0c0; stop-opacity:1" />
            <stop offset="50%" style="stop-color:#808080; stop-opacity:1" />
            <stop offset="70%" style="stop-color:#606060; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#505050; stop-opacity:1" />
          </linearGradient>
        </defs>

        <rect class="shape" height="60" width="320" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="svg-text">
          {{ text }}
        </text>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .svg-wrapper {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .shape {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
    fill: transparent;
    stroke: url(#gradient);
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  }
  .svg-text {
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 25px;
    fill: #fff;
    letter-spacing: 2px;
    pointer-events: none;
  }
  .shape:hover {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
  </style>
  
  
  
  