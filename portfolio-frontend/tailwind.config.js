module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    extend: {
      colors: {Dark_bg:'#090912',secondary:'#5727B0',main:'#9C27B0',back:'#57ACDC',back2:'#242435'},
      keyframes: {
        dragon: {
          '0% ':{mixBlendMode: 'plus-lighter'},
          '25% ':{mixBlendMode: 'difference'},
          '50% ':{mixBlendMode: 'hue'},
          '75% ':{mixBlendMode: 'overlay'},
          '100% ':{mixBlendMode: 'unset'},
          
        },
        letters: {
          '0% ':{color: '#9C27B0'},
          '50% ':{color: '#57ACDC'},
          '100% ':{color: '#57DCBE'},
          
        },
        line:{
          '0%' :{width:'0'},
          '100%' :{backgroundColor:'#57ACDC',width:'60%'},   
        },
        
        line1:{
          '0%' :{height:'0'},
          '100%' :{backgroundColor:'#57ACDC',height:'60%'},
        },
        
        
        border1:{
          '100%':{borderTopLeftRadius:'100%'}
        },
        border2:{
          '100%':{borderTopRightRadius:'100%'}
        },
        border3:{
          '100%':{borderBottomLeftRadius:'100%'}
        },
        border4:{
          '100%':{borderBottomRightRadius:'100%'}
        },
        colorChange:{
          '0%':{color:'#9C27B0'},
          '100%':{color:'#57ACDC'}
        }

      },
        animation: {
          dragon: 'dragon 4s ease-in-out infinite alternate',
          letters: 'letters 3s ease-in-out infinite alternate',
          letters2: 'letters 3s 1s ease-in-out infinite alternate',
          letters3: 'letters 3s 2s ease-in-out infinite alternate',
          hops: 'bounce 2s ease-in-out infinite alternate',
          hops2: 'bounce 2.5s ease-in-out infinite alternate',
          hops3: 'bounce 3s ease-in-out infinite alternate',
          line: 'line 2s ease-in-out infinite alternate',
          line1: 'line1 2s ease-in-out infinite alternate',
          border1: 'border1 2s ease-in-out infinite alternate',
          border2: 'border2 2s ease-in-out infinite alternate',
          border3: 'border3 2s ease-in-out infinite alternate',
          border4: 'border4 2s ease-in-out infinite alternate',
          colorChange: 'colorChange 2s ease-in-out infinite alternate',
        },
        dropShadow: {
          '3xl': '0 25px 25px rgb(66 47 134 / 97%)',
          '4xl': '0 25px 25px rgb(38 38 41)'
        }
    },
  },
  plugins: [],
}
