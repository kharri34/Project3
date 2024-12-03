<template>
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <!-- Define the gradient -->
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(228, 213, 171); stop-opacity:1" />
            <stop offset="25%" style="stop-color:rgb(233, 210, 147); stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgb(237, 204, 113); stop-opacity:1" />
            <stop offset="70%" style="stop-color:rgb(238, 192, 64); stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(240, 179, 11); stop-opacity:1" />
          </linearGradient>
        </defs>
  



        <!-- Rectangle with gradient stroke -->
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
    position: relative;
    margin: 0 auto;
    width: 320px;
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
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 22px;
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
  
  
  
  