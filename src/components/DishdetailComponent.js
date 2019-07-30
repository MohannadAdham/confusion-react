import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from  'reactstrap';
import { Media } from 'reactstrap'



    function RenderComments({dish}) {

        if (dish != null) {
            return (     
                dish.comments.map((comment) => {
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
                <div>There are no comments</div>
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
                    <RenderDish dish={props.dish} />

                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments dish={props.dish} />
                    </div> 
                </div>
               
            </div>
        )

    }

export default DishDetail;
