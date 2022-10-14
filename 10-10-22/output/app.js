let mylist=[
  {   
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEO_eIGzDRpkTx9VukpJjbHDbeGwOUTfh4Q&usqp=CAU",
    price:"₹15,000",
    model:"New iphone model",
    address:"Ammaiyapattu, Vandavasi, Tamil Nadu",
    Date:"12-3-2022",
    Phonenumber:9099006867,
},
{
    id:2,
    image:"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    price:"₹69,000",
    model:"second Blue Bmw Sedan ",
    address:"mani, Lucknow",
    Date:"8-9-2020",
    Phonenumber:8799876867,
},
{
    id:3,
    image:"https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx",
    price:"₹20,090",
    model:"Bajaj navi bike",
    address:"ravi, nagercoil,tamilnadu",
    Date:"3-4-2021",
    Phonenumber:9089876867,
},
{
    id:4,
    image:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg?w=400&h=300&c=crop",
    price:"₹,100,890",
    model:"Lenova",
    address:"Ragavi, Maharashtra, India",
    Date:"19-9-2022",
    Phonenumber:8199876867,
},
{
    id:5,
    image:"https://cdn.xxl.thumbs.canstockphoto.com/my-new-lcd-tv-set-for-your-designs-stock-images_csp4404925.jpg",
    price:"₹9,000",
    model:"Saamsung 46 inch flat LCD tv",
    address:"Abdhul , Kanyakumari",
    Date:"4-5-2020",
    Phonenumber:9342876867,
},
{
      id:6,
      image:"https://5.imimg.com/data5/XS/LR/MY-24465010/ladies-cycle-500x500.jpg",
      price:"₹3,000",
      model:"Dinar Pinke Ladies Cycle, Size: 20",
      address:"Abilash, thirunelveli",
      Date:"6-1-2002",
      Phonenumber:8929876867
  },
  {
      id:7,
      image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZCUyMHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      price:"4,000",
      model:"Samsung Galaxy Buds Live for Sale - Unboxed",
      address:"Rani, Erode",
      Date:"16-2-2012",
      Phonenumber:7896876867,
  },
  {
      id:8,
      image:"https://images.carandbike.com/bike-images/colors/suzuki/avenis/suzuki-avenis-metallic-matte-black-glass-sparkle-black.jpg?v=1651238827",
      price:"₹70,000",
      model:"Suzuki Avenis 125",
      address:"Junglighar, Port Blair, Andaman & Nicobar Islands",
      Date:"15-6-2021",
      Phonenumber:9099876867,
  },
  {
      id:9,
      image:"https://thumbs.dreamstime.com/b/modern-white-earphone-ear-headphone-wooden-table-earphones-over-board-155051166.jpg",
      price:"₹100",
      model:"Earphone",
      address:"latha,rajasthan",
      Date:"4-3-2022",
      Phonenumber:7099876867
  },
  {
      id:10,
      image:"https://img.freepik.com/premium-psd/books-cover-mockup_145224-172.jpg?w=2000",
      price:"₹2,000",
      model:"Mockup Text Book",
      address:"Rishan, nagercoil",
      Date:"29-4-2015",
      Phonenumber:8099876867,
  },
  {
      id:11,
      image:"https://5.imimg.com/data5/CY/HS/VU/SELLER-743647/exide-inverter-battery-1000x1000.jpeg",
      price:"₹39,000",
      model:"Lead Acid Battery Exide Inverter Battery for Home, Capacity: 17-200 Ah",
      address:"mani, Lucknow",
      Date:"8-8-2022",
      Phonenumber:8099876867,
  },
  {
      id:12,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2qRtKuus0V7fNrBY1qunrCbK4P6oPKW2vixXTemg9nkFIraUgqtCHq3oz5XH92U-VAM&usqp=CAU",
      price:"₹92,000",
      model:"The new Bugatti Mistral ",
      address:"mani, Lucknow",
      Date:"10-11-2019",
      Phonenumber:8976876867,
  },
]
localStorage.setItem("olx",JSON.stringify(mylist));

let list=JSON.parse(localStorage.getItem("olx"));
for(let i=0; i<list.length;i++){
  list[i].price="<a target='_blank' href='view.html?id="+list[i].id +"'>"+list[i].price+"</a>";
  document.getElementById("image" +i).src=list[i].image;
  document.getElementById("price" +i).innerHTML=list[i].price;
  document.getElementById("model" +i).innerHTML=list[i].model;
  document.getElementById("address" +i).innerHTML=list[i].address;
}
function loginpage() {
  window.location.href="login.html"
}







let cUser;
a.auth().onAuthStateChanged(function (user) {
  if (user) {
    cUser = user;
    const messaging = firebase.messaging();
    messaging.requestPermission().then(function () {
      console.log('Notification permission granted.');
      return messaging.getToken();
    }).then(function (token) {
      // Displaying user token
      console.log('token >>>> ', token);
      firestore.collection("Users").doc(user.uid)
        .update({
          token: token
        })
    }).catch(function (err) { // Happen if user deney permission
      console.log('Unable to get permission to notify.', err);
    });
  } else {
    // User is signed out.
    // ...
  }
});
//FIRESTORE ENDED
/* Loader */
var loader = document.getElementById("loader")
// Hide the loader from DOM
function hideLoader() {
  loader.style.display = "none";
}
// Show the loader on DOM
function showLoader() {
  loader.style.display = "block";
}
/* Loader End */
/* PopUP Message */
function showAndDismissAlert(type, message) {
  var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';
  $(".alert-messages").prepend(htmlAlert);
  $(".alert-messages .alert").first().hide().fadeIn(1000).delay(1000).fadeOut(1000, function () { $(this).remove(); });
}
/* PopUP Message */
/* Offline SHowing Ads */
/* window.addEventListener("load", function(event) {
    if (!navigator.onLine) {
        var offline=document.getElementById("offlineMessage").style.display="block"
        var cat=document.getElementById("catogries").style.display="none"

        hideLoader()
        showAndDismissAlert('danger',"You Are Offline" )
      return false;
    }
  }); */
window.addEventListener('load', function (e) {
  if (navigator.onLine) {
    console.log('We\'re online!');
  } else {
    var offline = document.getElementById("offlineMessage").style.display = "block"
    var cat = document.getElementById("catogries").style.display = "none"
    hideLoader()
    showAndDismissAlert('danger', "You Are Offline")
  }
}, false);
window.addEventListener('online', function (e) {
  var offline = document.getElementById("offlineMessage").style.display = "none"
  var cat = document.getElementById("catogries").style.display = "block"
  showAndDismissAlert('success', "You Are Online")
}, false);
window.addEventListener('offline', function (e) {
  var offline = document.getElementById("offlineMessage").style.display = "block"
  var cat = document.getElementById("catogries").style.display = "none"
  hideLoader()
  showAndDismissAlert('danger', "You Are Offline")
}, false);
/* Offline Showing Ads */
var userId = localStorage.getItem("userId")
function showAddOnload() {
  var title = document.getElementById("headingAds").innerHTML = "Ads"
  db.collection("Ads")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        showLoader()
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Add</button>
              <button  class="btn btn-danger"    onclick="deleteAdd('${doc.id}',this)">Delete Add</button>
            </div>
            </div>
           `;
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
        }
        hideLoader()
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
var ModalMain = document.getElementById("ModalMain")
function DisplayAdd(id) {
  var docRef = db.collection("Ads").doc(id);
  docRef.get().then(function (doc) {
    if (doc.exists) {
      showLoader()
      console.log("Document data:", doc.data());
      if (doc.data().userId == userId) {
        ModalMain.innerHTML = `
                    <div class="modal-header">
                    <a href="#" data-dismiss="modal" class="class pull-left"><span class="glyphicon glyphicon-remove"></span></a>
                        <h3 class="modal-title">${doc.data().Category}</h3>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 product_img">
                                <img src="${doc.data().img}" class="img-responsive">
                            </div>
                            <div class="col-md-6 product_content">
                                <h2 id="Adtitle">${doc.data().AdTitle}</h2>
                                <h4 id="name">Name: ${doc.data().Name}</h4>
                                <p id="AdDescriptiion">${doc.data().AdDescription}</p>
                                <h3 id="city"><span class="glyphicon glyphicon-map-marker"></span>${doc.data().city}</h3>
                                <h3 id="Number"><span class="glyphicon glyphicon-earphone"></span>${doc.data().number}</h3>
                                <h3 id="price"> RS ${doc.data().price}</h3>
                                <div class="space-ten"></div>
                                <div class="btn-ground">
                                <button  class="btn btn-danger")">Delete Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                         `;
      }
      else {
        ModalMain.innerHTML = `
                    <div class="modal-header">
                    <a href="#" data-dismiss="modal" class="class pull-left"><span class="glyphicon glyphicon-remove"></span></a>
                        <h3 class="modal-title">${doc.data().Category}</h3>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 product_img">
                                <img src="${doc.data().img}" class="img-responsive">
                            </div>
                            <div class="col-md-6 product_content">
                                <h2 id="Adtitle">${doc.data().AdTitle}</h2>
                                <h4 id="name">Name: ${doc.data().Name}</h4>
                                <p id="AdDescriptiion">${doc.data().AdDescription}</p>
                                <h3 id="city"><span class="glyphicon glyphicon-map-marker"></span>${doc.data().city}</h3>
                                <h3 id="Number"><span class="glyphicon glyphicon-earphone"></span>${doc.data().number}</h3>
                                <h3 id="price"> RS ${doc.data().price}</h3>
                                <div class="space-ten"></div>
                                <div class="btn-ground">
                                    <button type="button" class="btn btn-primary" onclick="message('${doc.id}')"><span class="glyphicon glyphicon-envelope"></span> Message</button>
                                    <button type="button" class="btn btn-danger" fav="no"  onclick="addFavorite(this,'${doc.id}')" ><span class="glyphicon glyphicon-heart-empty"></span> Add To Favorite</button>
                                </div>
                            </div>
                        </div>
                    </div>
                         `;
      }
      hideLoader()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}
function deleteAdd(id, a) {
  /* db.collection("Ads").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
   */
  var result = confirm("Are you sure to delete this item?");
  if (result) {
    db.collection("Ads").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    a.parentNode.parentNode.style.display = "none"
    showAndDismissAlert('danger', "Your Add Has Been Deleted")
  }
}
var reciveMessage = document.getElementById("reciveMessage")
var sendMessage = document.getElementById("sendMessage")
/* Message */
function message(AdId) {
  localStorage.setItem('AdId', AdId);
  var docRef = db.collection("Ads").doc(AdId);
  docRef.get().then(function (doc) {
    if (doc.exists) {
      console.log("This Is Data:", doc.data());
      var AdUserId = doc.data().userId
      localStorage.setItem("reciverId", AdUserId)
      makeRoom()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  function makeRoom() {
    var userId = localStorage.getItem("userId");
    var AdUserId = localStorage.getItem("reciverId");
    db.collection('rooms')
      .where("ad_id", "==", AdId)
      .where(`users.${userId}`, "==", true)
      .where(`users.${AdUserId}`, "==", true)
      .get().then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          // Contents of first document
          console.log(querySnapshot.docs[0].data());
          console.log(querySnapshot.docs[0].id);
          var roomId = querySnapshot.docs[0].id
          var RoomId = localStorage.setItem("RoomId", roomId)
          window.location.href = "Message/message.html"
        } else {
          var userId = localStorage.getItem("userId");
          var DateNew = new Date();
          var currentTime = DateNew.toLocaleTimeString();
          var reciverId = localStorage.getItem("reciverId", reciverId);
          var messageRef = db.collection('rooms').add
            ({
              createdAt: currentTime,
              users: {
                [userId]: true, [AdUserId]: true
              },
              ad_id: AdId
            }).then(function (docRef) {
              var DateNew = new Date();
              var currentTime = DateNew.toLocaleTimeString();
              currentRoom = docRef.id;
              console.log("current Room " + currentRoom)
              var RoomId = localStorage.setItem("RoomId", currentRoom)
              db.collection('rooms').doc(docRef.id)
                .collection('Message').add({
                  message: "You Can Chat Now",
                  senderId: userId,
                  reciverId: reciverId,
                  Time: currentTime,
                })
              console.log("Your Work Has Been Done Succesfully");
              window.location.href = "Message/message.html"
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        }
      })
      .catch(function (error) {
        console.log("Error getting document: ", error);
      });
  }
}
/* getting Room Messages */
/* db.collection('rooms').doc(doc.id).collection('Message').get()
.then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
       // doc.data() is never undefined for query doc snapshots
       window.location.href="Message/message.html"
       console.log(doc.id, " => ", doc.data());
       reciveMessage.innerHTML=doc.data().message
   });
})
.catch(function(error) {
   console.log("Error getting documents: ", error);
});  */
/* Getting Room Messages */
/* else{
    var messageRef = db.collection('rooms').add
                 ({
                            createdAt: Date.now(),
                            users:{
                            [userId]:true,[AdUserId]:true
                            },
                            ad_id: AdId
                }) .then(function(docRef) {
                      currentRoom = docRef.id;
                     console.log("current Room " + currentRoom)
                    db.collection('rooms').doc(docRef.id)
                    .collection('Message').add({
                      message:"My first Message",
                      senderId:userId,
                      reciverId:AdUserId
   })
      console.log("Your Work Has Been Done Succesfully");
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  }); 
} */
/* Message */
/* Add TO FAVORITES Start */
var FavId = localStorage.getItem("userId");
function addFavorite(x, id) {
  if (localStorage.getItem("Fav") === null) {
    localStorage.setItem("Fav", "[]")
  }
  if (x.hasAttribute("fav")) {
    db.collection('Favorites')
      .where("AdId", "==", id)
      .where("FavPersonID", "==", FavId)
      .get().then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          // Contents of first document
          showAndDismissAlert('info', 'Already Favorite!')
          x.removeAttribute("fav")
          x.firstElementChild.setAttribute("class", "glyphicon glyphicon-heart")
        }
        else {
          x.removeAttribute("fav")
          x.firstElementChild.setAttribute("class", "glyphicon glyphicon-heart")
          console.log("Added To Favorite" + id)
          /* PopUp  */
          showAndDismissAlert('success', 'Added To Favorite!')
          /* PopUp  */
          /* Getting Data */
          var docRef = db.collection("Ads").doc(id);
          docRef.get().then(function (doc) {
            if (doc.exists) {
              console.log("Document data");
              /* Local Storage For OFFline */
              var users = JSON.parse(localStorage.getItem("Fav"));
              favAd = {
                AdTitle: doc.data().AdTitle,
                Category: doc.data().Category,
                AdDescription: doc.data().AdDescription,
                Name: doc.data().Name,
                number: doc.data().number,
                city: doc.data().city,
                img: doc.data().img,
                FavPersonID: FavId,
                price: doc.data().price,
                AdId: id
              }
              var fav = users.unshift(favAd)
              localStorage.setItem("Fav", JSON.stringify(users));
              console.log(users)
              /* Local Storage For OFFline */
              /* Adding Data To Favorite */
              db.collection("Favorites").add({
                AdTitle: doc.data().AdTitle,
                Category: doc.data().Category,
                AdDescription: doc.data().AdDescription,
                Name: doc.data().Name,
                number: doc.data().number,
                city: doc.data().city,
                img: doc.data().img,
                FavPersonID: FavId,
                price: doc.data().price,
                AdId: id
              })
                .then(function (docRef) {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                  console.error("Error adding document: ", error);
                });
              /* Adding Data To Favorite End */
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }).catch(function (error) {
            console.log("Error getting document:", error);
          });
          /* Getting Data */
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  else {
    x.setAttribute("fav", "no");
    x.firstElementChild.setAttribute("class", "glyphicon glyphicon-heart-empty")
    // console.log("Removed From Fav"+id)
    /* Deleting Fav */
    /* db.collection("Favorites").where("AdId", "==", id)
    .delete()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
*/
    db.collection('Favorites').where('AdId', '==', id)
      .where("FavPersonID", "==", FavId)
      .get()
      .then(function (querySnapshot) {
        // Once we get the results, begin a batch
        var batch = db.batch();
        querySnapshot.forEach(function (doc) {
          // For each doc, add a delete operation to the batch
          batch.delete(doc.ref);
        });
        // Commit the batch
        return batch.commit();
      }).then(function () {
        var Ads = JSON.parse(localStorage.getItem("Fav"));
        for (var i = 0; i < Ads.length; i++) {
          if (Ads[i].AdId == id) {
            var users = Ads.splice([i], 1);
            localStorage.setItem("Fav", JSON.stringify(Ads));
          }
        }
        showAndDismissAlert('danger', "Removed From Favorite!")
      });
  }
}
/* Add To Favorite End */
/* Searching  */
function searchAds() {
  var searchInput = document.getElementById("txtSearch").value;
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("AdTitle", "==", searchInput)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        showLoader()
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Bikes"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
          <div class="card" style="width: 25rem";"border-radius: 15px" >
          <img class="card-img-top" src='${doc.data().img}'/>
          <div class="card-body">
            <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
            <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
            <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
            <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
          </div>
          </div>
         `;
          hideLoader();
        }
        else {
          allAds.innerHTML += `
          <div class="card" style="width: 25rem";"border-radius: 15px" >
          <img class="card-img-top" src='${doc.data().img}'/>
          <div class="card-body">
            <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
            <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
            <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
            <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
            <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
          </div>
          </div>
         `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* All ADs  */
function allads() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Ads"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
        <div class="card" style="width: 25rem";"border-radius: 15px" >
        <img class="card-img-top" src='${doc.data().img}'/>
        <div class="card-body">
          <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
          <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
          <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
        </div>
        </div>
       `;
          hideLoader();
        }
        else {
          allAds.innerHTML += `
        <div class="card" style="width: 25rem";"border-radius: 15px" >
        <img class="card-img-top" src='${doc.data().img}'/>
        <div class="card-body">
          <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
          <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
          <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
          <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
          <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
        </div>
        </div>
       `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* All ADs */
/* Search Catogagries */
function searchbike() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Bikes")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Bikes"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
            </div>
            </div>
           `;
          hideLoader();
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Cars */
function searchCars() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Cars")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Cars"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
              <button  class="btn btn-danger"    onclick="deleteAdd('${doc.id}',this)">Delete Add</button>
            </div>
            </div>
           `;
          hideLoader()
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Cars */
/* Mobiles */
function searchMobiles() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Mobiles")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Mobiles"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
            </div>
            </div>
           `;
          hideLoader()
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Mobiles */
/* Furniture */
function searchFurnitures() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Furniture")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Furnitures"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
            </div>
            </div>
           `;
          hideLoader()
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Furniture */
/* Animals */
function searchAnimals() {
  var heading = document.getElementById("headingAds")
  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Animals")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Animals"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
            </div>
            </div>
           `;
          hideLoader()
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Animals */
/* Kids */
function searchKids() {
  var heading = document.getElementById("headingAds")

  allAds.innerHTML = ""
  heading.innerHTML = " "
  window.location.href = "#allAds"
  db.collection("Ads").where("Category", "==", "Kids")
    .get()
    .then(function (querySnapshot) {
      showLoader()
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        heading.innerHTML = "Kids"
        if (doc.data().userId == userId) {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">Open Your Add</button>
            </div>
            </div>
           `;
          hideLoader()
        }
        else {
          allAds.innerHTML += `
            <div class="card" style="width: 25rem";"border-radius: 15px" >
            <img class="card-img-top" src='${doc.data().img}'/>
            <div class="card-body">
              <h3 class="card-title" id="card-title">${doc.data().AdTitle}</h3>
              <h4 class="card-text" id="card-text"><span class="glyphicon glyphicon-map-marker"></span>Location:${doc.data().city}</h4>
              <h3 class="card-text" id="card-price">Rs ${doc.data().price}</h3>
              <button  class="btn btn-primary"  data-toggle="modal" data-target="#product_view"  onclick="DisplayAdd('${doc.id}')">BUY</button>
              <button  class="btn btn-primary btn-danger" onclick="addFavorite(this,'${doc.id}')" fav="no"><span class="glyphicon glyphicon-heart-empty" "></span>Add To Favorite</button>
            </div>
            </div>
           `;
          hideLoader();
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
/* Kids */
/* All Ads */
/* Search Catogries */
/* Messages */
/* SERVICE WORKER */
if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  // if service worker supported then register my service worker
  navigator.serviceWorker.register('firebase-messaging-sw.js').then(function (reg) {
    console.log('Successfully Register :^)', reg);
    reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function (subscription) {
      console.log('subscription:', subscription.toJSON());
      // GCM were used this endpoint
      console.log('endpoint:', subscription.endpoint);
    });
  }).catch(function (error) {
    console.log('SW Registration Failed: :^(', error);
  });
}
/* SERVICE WORKER */