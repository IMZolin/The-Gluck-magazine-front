<template>
  <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5"
                                                                                         width="150px"
                                                                                         src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span
            className="font-weight-bold">Username</span><span
            className="text-black-50">example@mail.ru</span><span> </span></div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Profile page</h4>
            <div className="d-flex justify-content-between align-items-center experience"><span></span><span
                className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Edit</span></div>
            <br>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">First name</label><input type="text"
                                                                                         className="form-control"
                                                                                         placeholder="First name"
                                                                                         value=""></div>
            <div className="col-md-6"><label className="labels">Last name</label><input type="text"
                                                                                        className="form-control"
                                                                                        value=""
                                                                                        placeholder="Last name"></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Username</label><input type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Username" value="">
            </div>
            <div className="col-md-12"><label className="labels">Email</label><input type="text"
                                                                                     className="form-control"
                                                                                     placeholder="Email" value=""></div>
            <div className="col-md-12"><label className="labels">Password</label><input type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Password" value="">
            </div>
          </div>
          <!--          <div class="row mt-3">-->
          <!--            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>-->
          <!--            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>-->
          <!--          </div>-->
          <div className="mt-5 text-center">
            <button className="btn btn-primary profile-button" type="button">Save Profile</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h4 className="text-center">Articles</h4>
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center experience"><span></span>
            <router-link to="/editor">
            <span
              className="border px-3 p-1 add-experience">
            <i className="fa fa-plus"></i>&nbsp;New article</span>
            </router-link>
          </div>
          <br>
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