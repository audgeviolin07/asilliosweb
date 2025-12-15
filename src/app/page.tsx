import FaultyTerminal from '../components/FaultyTerminal';

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <FaultyTerminal
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={0}
        flickerAmount={0}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#ffffff"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={1}
      />
    </div>
  );
}
