import React from "react";
import vietnamLake from "../../src/Images/vietnam-lake.jpeg";
import Valley from "../../src/Images/valley.jpeg";
import elephantFalls from "../../src/Images/elephant-falls.jpeg";

const ToDo = () => {
  return (
    <div className="ttd">
      <h1>Here are a list of the top 3 things to do in Đà Lạt, Vietnam</h1>
      <div className="todo-container">
        <h2>
          <strong>1. Explore Tuyen Lam Lake</strong>
        </h2>
        <div className="todo-images">
          <img className="todo-img" src={vietnamLake} alt="vietnam-lake" />
        </div>
        <p>
          {" "}
          <strong>
            This man made lake was built in 1982-1987 and is public to everyone.
            This lake is the perfect spot for boat rides, fishing, horseback
            riding and more. There is also a place called Thien Vien Truc Lam
            that any tourist can stop at to get a better view of the lake. The
            best part about this place is that it is filled with fun for all
            ages. If you feel the need to surround yourself by nature, this is
            the perfect spot for you!
          </strong>
        </p>
        &nbsp;
        <h2>
          <strong>2. Visit Valley of Love</strong>
        </h2>

        <div className="todo-images">
        <img className="todo-img" src={Valley} alt="Valley" />
        </div>
        <p>
          {" "}
          <strong>
            {" "}
            Even though Valley of Love has quite a romantic name, it is actually
            a theme park located just three miles away from Đà Lạt. This place
            is filled with gardens and flowers for everyone of all different
            ages to come and see. This is a very peaceful place surrounded by
            hills and a verdant forrest. There are countless amount of photos
            that could be taken here because of how all the flowers and plants
            are creatively organized. Additionally, families can even come here
            to have a picnic while being able to stare at a nice view right in
            front of them.
          </strong>
        </p>
        &nbsp;
        <h2>
          <strong>3. See Elephant Falls</strong>
        </h2>
        <img className="todo-img" src={elephantFalls} alt="Elephant Falls" />
        <p>
          {" "}
          <strong>
            {" "}
            Elephant Falls is one of the most visited attractions in the Đà Lạt
            area. It is absolutely stunning to look at and at the bottom of the
            water fall there is even a pool. It stretches 30 meters in height
            and 15 meters in width, it is surrounded by a forrest and huge
            boldering rocks at the bottom of the waterfall. This place is family
            friendly and is only 15 miles away from Đà Lạt. Legends say that
            this waterfall was created by elephants that were really moved by a
            woman's singing to her fiance that never made it back from the war.
            Overall, there is no going wrong when visiting a place like this.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default ToDo;
