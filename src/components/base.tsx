import { styled } from '@mui/styles';
import Box from '@mui/material/Box';

export const FixedWidthBox = styled(Box)({
    maxWidth: '1400px',
    padding: 0,
    margin: '0 auto'
});

export const FilterOuter = styled(Box)({
    padding: '28px 60px',
    backgroundColor: '#262D4D',
    height: '80px',
});

export const Logo = ():JSX.Element=>{

    return (
        <>
            <Box style={{
                width: '268px',
                height: '120px',
                padding: '10px',
            }}>
            <h1 style={{
                background: `url(${process.env.PUBLIC_URL}img/logo.png) center / contain no-repeat`,
                width: '100%',
                height: '100%',
                textIndent: '-9999px',
                margin: 0,
                padding: 0,
            }}>DummyPuggy</h1>
            </Box>
        </>
    );
}

export type SizedBoxProps = {
    width?: string,
    height?: string,
    children?: JSX.Element | JSX.Element[] | string
}

export const SizedBox = (props: SizedBoxProps)=>{
    const {width, height, children,} = props;
    return (
              <Box sx={{
                  width: width ?? 0,
                  height: height ?? 0,
                  display: 'inline-block',
              }}>
                  {children}
              </Box>
    )
}

export const Text = styled(Box)({
    display: 'inline-block',
    textSizeAdjust: 'none',
    textTransform: 'none',
    fontFamily: 'MEUltrabold, Helvetica, sans-serif !important',
  });

export const Expanded = styled(Box)({
    flexGrow: 1,
});