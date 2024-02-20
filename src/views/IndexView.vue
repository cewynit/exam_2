<template>
  <div class="container1">
    <h1>Inside Open Art</h1>
    <div class="div container">
      <div>
        <p>
          <i class="mdi mdi-pound" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">4pt gird system</p>
        <p style="font-size: 16px;">
          Base on 4pt grid system. Our UI kit help you create perfect white
          space
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-pencil-outline" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Color style</p>
        <p style="font-size: 16px;">
          All color in OpenArt are styled. You can change all design color with
          one click
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-caps-lock" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Free font</p>
        <p style="font-size: 16px;">
          OpenArt use Epilogue font family Available with open licence in
          gooogle font
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-toggle-switch" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Darkmode avaiable</p>
        <p style="font-size: 16px;">
          Our UI Kit support darkmode Chage your design to dark mode with one
          click
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-pencil-ruler-outline" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Easy to customize</p>
        <p style="font-size: 16px;">Create any design with OpenArt UI kits </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-arrow-all" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Variant components</p>
        <p style="font-size: 16px;">All component art variant, easy to design, easy to control</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "IndexView"
};
</script>
  
  <style>
.container1 {
  font-family: Arial, Helvetica, sans-serif;
  display: auto;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/img/anh.png");
  width: 100%;
  height: 100%;
}
h1 {
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 56px;
  font-weight: 700;
  text-align: center;
}
.container > div {
  width: 30%;
  background-color: white;
  height: auto;
  margin: 7px;
  color: black;
  border-radius: 16px;
  padding: 7px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
}
.container > div p {
  margin: 10px;
}

.container > div p:last-child {
  opacity: 0.6;
}
</style>