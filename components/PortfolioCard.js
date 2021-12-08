
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortfolioCard = ({portfolio, children}) =>
<div class="port-card">
<div class="face face1">
   <div class="content">
      {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/> */}
      <h3>{portfolio.title}</h3>
   </div>
</div>
<div class="face face2">
   <div class="content">
      <p>{portfolio.description}</p>
      <a href="#">Read More</a>
   </div>
</div>
</div>
  // <Card className="portfolio-card">
  //   <CardHeader className="portfolio-card-header">{portfolio.jobTitle}</CardHeader>
  //   <CardBody>
  //     <p className="portfolio-card-city">{portfolio.location}</p>
  //     <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
  //     <CardText className="portfolio-card-text">{portfolio.description}</CardText>
  //     {children}
  //   </CardBody>
  // </Card>

export default PortfolioCard;
