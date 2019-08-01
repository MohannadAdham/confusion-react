import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from  'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';



    function RenderComments({comments}) {

        if (comments != null) {
            return (     
                comments.map((comment) => {
                    return (
                        <div key={comment.id} className="col-12">
                            <Media tag="li">
                                <Media body>
                                    <p>{comment.comment}<br/>
                                    {"-- " + comment.author + ", " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </Media>
                            </Media>
                        </div>
                    );
                })
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

            );
        } else {
            return(<div></div>)
        }
    }

    const DishDetail = (props) => {

        console.log("Dishdetail Component render method is invoked.");

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div> 
                </div>
               
            </div>
        )

    }

export default DishDetail;
