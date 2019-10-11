'use strict';

import users from './users.js';

    // Task_1

const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));

    // Task_2

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);      
};
console.log(getUsersWithEyeColor(users, 'blue'));

    // Task_3

const getUsersWithGender = (users, gender) => {
  const genderStatus = users.filter(user => user.gender === gender);
  return genderStatus.map(user => user.name);
};
console.log(getUsersWithGender(users, 'male'));
   
      // Task_4

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive );
};
console.log(getInactiveUsers(users));
    
      // Task_5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
   
      // Task_6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
   
      // Task_7

const calculateTotalBalance = users => {
  return users.reduce((totalSumm, user) => totalSumm + user.balance, 0);
    };
console.log(calculateTotalBalance(users));

      // Task_8

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((allFriends, user) => {
    if (user.friends.includes(friendName)) {
        allFriends.push(user.name);
        }
    return allFriends;
    }, []);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

      // Task_9

const getNamesSortedByFriendsCount = users => {
  const sortByFriends = users.sort((a, b) => a.friends.length - b.friends.length);
  return sortByFriends.map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

      // Task_10

const getSortedUniqueSkills = users => {
 const allOfSkills = users.reduce((allSkills, user) => {
   allSkills.push(...user.skills);
  return allSkills;
        }, []);
  const sortSkills = allOfSkills.filter(skill => {
   return !allOfSkills.hasOwnProperty(skill)            
    });      
   return sortSkills.sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]