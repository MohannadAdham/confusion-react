import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from  'reactstrap';
import { Media } from 'reactstrap'


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        console.log("DishDetail Constructor is envoked");
    }


    renderComments(dish) {
        console.log("renderComments method is envoked");
        console.log("this is the dish id: " + dish.id);
        console.log(dish.comments != null);
        if (dish.comments != null) {
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
                <div></div>
            );
        }
    }

    renderDish(dish) {
        console.log("renderDish method is envoked");
        console.log(dish);


        if (dish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        } else {
            return(<div></div>)
        }
    }

    render() {
        return(
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        )

    }
}

export default DishDetail;
