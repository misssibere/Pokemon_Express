const React = require ('react');
const headerStyle={
    color:"green",
    fontSize:"24"
}
const linkStyle={
    color:'red',
    fontSize: '24px'
}

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return(
            <div>
                <h1 style={headerStyle}> 
                    See all the Pokemon! 
                </h1>
                <ul>
                {this.props.pokemons?.map((pokey,i) =>
               {
                            return (
                                <li key={i}>

                                    The{' '}
                                    <a href ={`/pokemon/${pokemon._id}`} >  { pokey.name } </a> 
                                    {/* <a href={`/pokemon/${i}`}>
                                        {pokey.name}
                                    </a> */}
                                    {' '}
                                    is {pokey.img}. <br></br>
                                  
                                    <br />

                                </li>
                            );
                
            })} 
            
            
            
          
                </ul>
                <nav>
                        <a  style={linkStyle}  href='/'> Back </a>
                </nav>
                
            </div>
        )
    }
}

module.exports = Index;