
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortfolioCard = ({portfolio,onClick, children}) =>
<div class="port-card">
<div class="face face1">
   <div class="content">
  
      <h3>{portfolio.title}</h3>
   </div>
</div>
<div class="face face2">
   <div class="content">
   <img src={portfolio.companyWebsite}/>
      <p>{portfolio.description}</p>
      <br/>
      <p>I was {portfolio.jobTitle}</p>
      <button onClick={onClick}>Read More </button>
      {children}
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
