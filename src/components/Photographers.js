import React from 'react';
import { Header, Image, Menu, Container, Card, Table, Icon, Dropdown } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavMenu from './NavMenu';
import '../Home.css';

class Photographers extends React.Component {
  state = { category: ' ' }

  render() {
    let { category } = this.state;
    return (
      <div>
        <div className='bodycolor'>
          <div className='topPage'>
            <br />
            <div className='topPageText'>
              <Container>
              <Header>Welcome to BLANK!</Header>
              <p>Your one stop shop for wedding Photographers and Videographers!
                We are commited to taking out the hassle of finding an affordable
                wedding photographer and or videographer. Here at BLANK we understand
                how important getting those services arranged is and how stressfull it
                can be. Browse through our list of Photographers and Videographers to find
                one you like and get in touch with them RIGHT away. Have a wonderful Wedding!
              </p>
              </Container>
            </div>
            <br />
          </div>
            <div className='menuOptions'>
              <NavMenu />
            </div>
        </div>
        <div className='categoryMenu'>
          <Container>
            <Header as='h3' textAlign="center">Photographers</Header>
            <div className='pickPrice'>
              <p>organiza pela preço!</p>
              <Dropdown
                placeholder="Filter by category"
                selection
                onChange={ (e, data) => this.setState({ category: data.value }) }
                value={category}
                />
            </div>
          </Container>
          <br />
          <br />
        </div>
          <div className='PhotoBody'>
            <br />
            <Grid>
              <Row>
                <Col xs={12} md={3}>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                          <Card>
                            <Image src={require('../images/jawa.png')} size='small' />
                          <Card.Content>
                            <Card.Header>Jawa</Card.Header>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                jawajunkparts@sandcrawler.com
                              </span>
                            </Card.Meta>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                (801)555-5555
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              Price: $200-$400
                            </Card.Description>
                            <Card.Description>
                              <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                                <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                              </a>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card>
                          <Image src={require('../images/vader.png')} size='small' />
                        <Card.Content>
                          <Card.Header>Lord Vader</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              allforpadame@force.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                </Col>
                <Col xs={12} md={3}>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                          <Card>
                            <Image src={require('../images/jawa.png')} size='small' />
                          <Card.Content>
                            <Card.Header>Jawa</Card.Header>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                jawajunkparts@sandcrawler.com
                              </span>
                            </Card.Meta>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                (801)555-5555
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              Price: $200-$400
                            </Card.Description>
                            <Card.Description>
                              <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                                <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                              </a>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card>
                          <Image src={require('../images/vader.png')} size='small' />
                        <Card.Content>
                          <Card.Header>Lord Vader</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              allforpadame@force.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                </Col>
                <Col xs={12} md={3}>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $600-$800
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                          <Card>
                            <Image src={require('../images/jawa.png')} size='small' />
                          <Card.Content>
                            <Card.Header>Jawa</Card.Header>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                jawajunkparts@sandcrawler.com
                              </span>
                            </Card.Meta>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                (801)555-5555
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              Price: $800
                            </Card.Description>
                            <Card.Description>
                              <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                                <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                              </a>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card>
                          <Image src={require('../images/vader.png')} size='small' />
                        <Card.Content>
                          <Card.Header>Lord Vader</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              allforpadame@force.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $600-$800
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                </Col>
                <Col xs={12} md={3}>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $400-$600
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                          <Card>
                            <Image src={require('../images/jawa.png')} size='small' />
                          <Card.Content>
                            <Card.Header>Jawa</Card.Header>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                jawajunkparts@sandcrawler.com
                              </span>
                            </Card.Meta>
                            <br />
                            <Card.Meta>
                              <span className='date'>
                                (801)555-5555
                              </span>
                            </Card.Meta>
                            <Card.Description>
                              Price: $800-$1000
                            </Card.Description>
                            <Card.Description>
                              <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                                <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                              </a>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card>
                          <Image src={require('../images/vader.png')} size='small' />
                        <Card.Content>
                          <Card.Header>Lord Vader</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              allforpadame@force.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $200-$400
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                        <Card>
                          <Image src={require('../images/robot.png')} size='small' />
                        <Card.Content>
                          <Card.Header>C3PO</Card.Header>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              simplerobotlife@translator.com
                            </span>
                          </Card.Meta>
                          <br />
                          <Card.Meta>
                            <span className='date'>
                              (801)555-5555
                            </span>
                          </Card.Meta>
                          <Card.Description>
                            Price: $400-$600
                          </Card.Description>
                          <Card.Description>
                            <a href="https://www.instagram.com/explore/tags/weddingphotos/">
                              <p>Click to see my work! <Icon color='black' name='instagram' size='big' /> </p>
                            </a>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                </Col>
              </Row>
            </Grid>
            <br />
          </div>
      </div>
    )
  }
}
export default Photographers;
