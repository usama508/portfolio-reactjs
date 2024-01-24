import { Col } from "react-bootstrap";

export const ProjectCard2 = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4} >
      
      <a href={link} style={{color:"white"}}>
        <div className="proj-imgbx">
 <img src={imgUrl}  style={{ height: "200px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
</div>
      </a>
       
      
    </Col>
  )
}