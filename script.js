const colors = [
  [13, 13, 13],      
  [42, 10, 10],      
  [26, 10, 46],      
  [10, 26, 46],      
  [10, 31, 10],      
  [17, 17, 17],    
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function interpolateColor(c1, c2, t) {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t)),
  ];
}

window.addEventListener('scroll', () => {
  const scrollY   = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress  = scrollY / docHeight;           

  const scaled   = progress * (colors.length - 1); 
  const index    = Math.floor(scaled);              
  const t        = scaled - index;                  

  const c1 = colors[index];
  const c2 = colors[Math.min(index + 1, colors.length - 1)];
  const [r, g, b] = interpolateColor(c1, c2, t);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});