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
        console.log(dish.id);
        console.log(dish.comments != null);
        if (dish.comments != null) {
            return (     
                dish.comments.map((comment) => {
                    return (
                        <div key={comment.id} className="col-12">
                            <Media tag="li">
                                <Media body>
                                    <p>{comment.comment}<br/>
                                    {"-- " + comment.author + ", " + comment.date}</p>
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
        console.log("renderDish methode is envoked");


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
            this.renderDish(this.props.selectedDish)
        )

    }
}

export default DishDetail;
