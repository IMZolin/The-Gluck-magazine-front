<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
    />
  </head>
  <body>
  <div class="container">
    <h4 id="title">Article Editor</h4>
    <div class="controls">
      <div class="main-controls">
        <div class="dropdown">
          <button
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
          >
            File
          </button>
          <div class="dropdown-menu">
            <button id="new-btn" class="dropdown-item">
              New
            </button>
            <button id="txt-btn" class="dropdown-item">
              Save as TXT
            </button>
            <button id="pdf-btn" class="dropdown-item">
              Save as PDF
            </button>
          </div>
        </div>

        <input id="filename-input" type="text" value="untitled" />
      </div>
      <div class="control-btn-container">
        <button id="bold-btn" class="btn btn-dark control-btn">
          b
        </button>
        <button id="underline-btn" class="btn btn-dark control-btn">
          u
        </button>
        <button id="italic-btn" class="btn btn-dark control-btn">
          i
        </button>
        <input id="color-btn" type="color" class="control-btn" />
      </div>
    </div>

    <div id="content" contenteditable="true" spellcheck="false"></div>
  </div>

<!--  <script src="htmltopdf.js"></script>
  <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
  ></script>
  <script src="script.js"></script>-->
  </body>
  </html>

</template>

<script>

//import { VueEditor } from 'vue2-editor'
// eslint-disable-next-line vue/multi-word-component-names
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Editor"
/*  components: {
    VueEditor
  },
  data() {
    return {
      content: '<h1>Initial Content</h1>'
    }
  }
  */
}

</script>
<style>
#title {
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
}

.controls {
  display: flex;
  justify-content: space-between;
}

.main-controls {
  display: flex;
}

.control-btn-container {
  display: flex;
}

.control-btn {
  margin-left: 8px;
  width: 50px;
  height: 100%;
}

#filename-input {
  margin-left: 10px;
}

#content {
  padding: 20px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  outline: none;
  min-height: 300px;
  margin: 30px 0;
}

</style>