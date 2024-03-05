import Accordion from 'react-bootstrap/Accordion';

const Aboutme = () => {

    return (
       
    <div id="skillBox">
        <div className='animeBox'> <h2> Skill </h2> </div>
        <Accordion className='animeBox-S'>
            <Accordion.Item eventKey="0">
                <Accordion.Header >FrontEND</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>JS</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>react js</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Bootsrtap</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </div>
    )
}
 
export default Aboutme;