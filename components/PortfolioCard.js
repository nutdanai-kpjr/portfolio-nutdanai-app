
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortfolioCard = ({portfolio,onClick, children}) =>
<div className="port-card">
<div className="face face1">
   <div className="content">
   <h5>{portfolio.category}</h5>
      <h3>{portfolio.title}</h3>
      <h5>{portfolio.techUsed}</h5>
   </div>
</div>
<div className="face face2">
   <div className="content">
   <img src={portfolio.logoUrl}/>
      <p>{portfolio.description} </p>
      <br/>
      <p>I was {portfolio.jobTitle}</p>
      <a href={portfolio.website} target="_" >Read More</a>
      {/* <button onClick={onClick}>Read More </button> */}
      {children}
   </div>
</div>
</div>
  // <Card classn<div classNameName="portfolio-card">
  //   <CardHeader classn<div classNameName="portfolio-card-header">{portfolio.jobTitle}</CardHeader>
  //   <CardBody>
  //     <p classn<div classNameName="portfolio-card-city">{portfolio.location}</p>
  //     <CardTitle classn<div classNameName="portfolio-card-title">{portfolio.title}</CardTitle>
  //     <CardText classn<div classNameName="portfolio-card-text">{portfolio.description}</CardText>
  //     {children}
  //   </CardBody>
  // </Card>

export default PortfolioCard;
