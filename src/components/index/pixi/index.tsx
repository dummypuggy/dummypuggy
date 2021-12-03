import { Sprite, Stage } from '@inlet/react-pixi'
import React, { useEffect } from 'react'

function Pixi() {
  const i = useIteration(0.1)
  return (
   <>
    <Stage
      width={300}
      height={300}
      raf={false}
      renderOnComponentChange={true}
      options={{ antialias: true, backgroundAlpha: 0 }}
    >
      <Sprite
        anchor={[-(2 + Math.sin(i / 5) * 2), 0.5]}
        position={150}
        rotation={(Math.PI / 180) * 90 + -i}
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      />
    </Stage>
   </>
  )
}

export default Pixi

export const useIteration = (incr = 0.1) => {
  const [i, setI] = React.useState(0);

  // at mount start raf
  useEffect(() => {
    let raf: number;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      setI(i => i + incr);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [incr]);

  return i;
}
