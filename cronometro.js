let [seg, min, hr] = [0, 0, 0], intervalo, rodando = false;

const atualizarTempo = () => 
    document.getElementById('tempo').textContent = 
    `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;

const iniciar = () => {
    if (rodando) return;
    rodando = true;
    intervalo = setInterval(() => {
        if (++seg === 60) (seg = 0, ++min);
        if (min === 60) (min = 0, ++hr);
        atualizarTempo();
    }, 1000);
};

const pausar = () => (clearInterval(intervalo), rodando = false);

const resetar = () => {
    [seg, min, hr, rodando] = [0, 0, 0, false];
    clearInterval(intervalo);
    atualizarTempo();
};