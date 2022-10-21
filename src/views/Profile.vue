<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Username</span><span class="text-black-50">example@mail.ru</span><span> </span></div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile page</h4>
            <div class="d-flex justify-content-between align-items-center experience"><span></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Edit</span></div><br>
          </div>
          <div class="row mt-2">
            <div class="col-md-6"><label class="labels">First name</label><input type="text" class="form-control" placeholder="First name" value=""></div>
            <div class="col-md-6"><label class="labels">Last name</label><input type="text" class="form-control" value="" placeholder="Last name"></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">Username</label><input type="text" class="form-control" placeholder="Username" value=""></div>
            <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="Email" value=""></div>
            <div class="col-md-12"><label class="labels">Password</label><input type="text" class="form-control" placeholder="Password" value=""></div>
          </div>
          <!--          <div class="row mt-3">-->
          <!--            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>-->
          <!--            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>-->
          <!--          </div>-->
          <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
      </div>
      <div class="col-md-4">
        <h4 class="text-center">Articles</h4>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center experience"><span></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;New article</span></div><br>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile"
}
</script>

<style scoped>
.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8
}

.profile-button {
  background: rgb(99, 39, 120);
  box-shadow: none;
  border: none
}

.profile-button:hover {
  background: #682773
}

.profile-button:focus {
  background: #682773;
  box-shadow: none
}

.profile-button:active {
  background: #682773;
  box-shadow: none
}

.back:hover {
  color: #682773;
  cursor: pointer
}

.labels {
  font-size: 11px
}

.add-experience:hover {
  background: #BA68C8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #BA68C8
}
</style>