#!/usr/bin/node

const studentHogwarts = function () {
  let privateScore = 0;
  let name = null;
  // private method changescoreby which takes points argument
  function changeScoreBy (points) {
    privateScore += points;
  }

  return {
    // public method setName to set the private variable name
    setName: function (newName) {
      name = newName;
    },
    // public method rewardStudent that calls the method changeScoreBy with 1
    rewardStudent: function () {
      changeScoreBy(1);
    },
    // public method penalizeStudent, that calls the method changeScoreBy with -1
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    // public method getScore that outputs name and score
    getScore: () => {
      console.log(name + ': ' + privateScore);
    }
  };
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();
