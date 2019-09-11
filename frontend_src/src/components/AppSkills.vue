<template>
  <div>
    <!-- Compétences Technique -->
    <div v-if="skills.technicalSkills && skills.technicalSkills.length != 0">
      <div class="section-title">
        <h3>Compétences techniques</h3>
      </div>
      <div class="s-card mt-2">
        <div v-for="skill in skills.technicalSkills" :key="skill.name">
          <h4>{{ skill.name }}</h4>
          <div class="progress mb-15">
            <div class="progressbar" :style="{width: (skill.level / maxSkillLevel)*100+'%'}"></div>
            <span class="level" v-if="false">{{ skill.level }} / {{ maxSkillLevel }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Langues -->
    <div  v-if="skills.languageSkills && skills.languageSkills.length != 0">
      <div class="section-title">
        <h3>Langues</h3>
      </div>
      <div class="s-card mt-2">
        <div v-for="skill in skills.languageSkills" :key="skill.name">
          <h4>{{ skill.name }}</h4>
          <div class="block-level">
            <span class="text">Oral</span>
            <div class="progress mini">
              <div class="progressbar" :style="{width: (skill.spoken_level / maxSkillLevel)*100+'%'}"></div>
              <span class="level" v-if="false">{{ skill.spoken_level }} / {{ maxSkillLevel }}</span>
            </div>
          </div>
          <div class="block-level">
            <span class="text">Ecrit</span>
            <div class="progress mini pull-right">
              <div class="progressbar" :style="{width: (skill.written_level / maxSkillLevel)*100+'%'}"></div>
              <span class="level" v-if="false">{{ skill.written_level }} / {{ maxSkillLevel }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">
  export default {
    name: "appSkill",
    data: function(){
      return {
        maxSkillLevel: 5
      }
    },
    props: {
      skills: Object
    }
  }
</script>
<style lang="scss" scoped>
h3 {
  font-size: 14px;
  position: relative;
  text-align: center;
  color: #757575;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 50%;
    left: -28px;
    width: 28px;
    height: 2px;
    height: 2px;
    background-color: #c7c7c7;
  }
  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 50%;
    right: -28px;
    width: 28px;
    height: 2px;
    height: 2px;
    background-color: #c7c7c7;
  }
}

h4 {
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 3px;
}

.section-title {
  margin-left: 20px;
  margin-right: 20px;
}
</style>