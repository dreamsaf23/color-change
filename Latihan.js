// CHANGE COLOR
const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function(){
    document.body.classList.toggle('biru');
}
// AKHIR CHANGE COLOR

// RANDOM COLOR
const tRandomColor = document.createElement('button');
const textTRandom = document.createTextNode('Random Color');
tRandomColor.appendChild(textTRandom);
tRandomColor.setAttribute('type', 'button');
tUbahWarna.after(tRandomColor);

tRandomColor.addEventListener('click', function(){
   const r = Math.round(Math.random() * 255 + 0);
   const g = Math.round(Math.random() * 255 + 0);
   const b = Math.round(Math.random() * 255 + 0);
   document.body.style.backgroundColor = 'rgb('+ r +',' + g +',' + b + ')';
});
// AKHIR RANDOM COLOR

// HUE SATURATION

const Merah = document.querySelector('input[name=Merah]');
const Hijau = document.querySelector('input[name=Hijau]');
const Biru = document.querySelector('input[name=Biru');

Merah.addEventListener('input', function() {
    const r = Merah.value;
    const g = Hijau.value;
    const b = Biru.value;
   document.body.style.backgroundColor = 'rgb('+ r +',255,255)';
});

Hijau.addEventListener('input', function() {
    const r = Merah.value;
    const g = Hijau.value;
    const b = Biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)';
});

Biru.addEventListener('input', function(){
    const r = Merah.value;
    const g = Hijau.value;
    const b = Biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
// AKHIR HUE SATURATION

// PERPINDAHAN WARNA

document.body.addEventListener('mousemove', function(){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255 );
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});

// AKHIR PERPINDAHAN WARNA


