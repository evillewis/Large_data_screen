<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div ref="chart" id="810ec2083501438b8126d9d24f4a97b7" class="chart-container" style="width:400px; height:700px;">
      <p class="title"></p>
      <p class="subtitle"></p>
      <table class="fl-table" style="width:400px; height:700px;">
        <thead>
          <tr>
            <th>剧集</th>
            <th>弹幕</th>
            <th>赞</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.episode }}</td>
            <td>{{ item.comments }}</td>
            <td>{{ item.likes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        tableData: [
          { episode: "第01集", comments: '秦昊：爬山吗？一秒下山的那种', likes: 8305 },
          { episode: "第02集", comments: '喊一句你大爷的试试', likes: 8889 },
          { episode: "第03集", comments: '快吗？我待会还要收尸耶', likes: 8526 },
          { episode: "第04集", comments: '好秃然啊', likes: 8451 },
          { episode: "第05集", comments: '她才6岁就这么坏', likes: 8472 },
          { episode: "第06集", comments: '我还有机会嘛＝你还想活嘛', likes: 7452 },
          { episode: "第07集", comments: '爸爸觉得老师有问题？', likes: 3387 },
          { episode: "第08集", comments: '哈哈哈哈哈哈，气势汹汹，回首掏，板砖一收，走位走位，看不见看不见', likes: 5601 },
          { episode: "第09集", comments: '升哥你也敢打，分分钟干死你', likes: 4533 },
          { episode: "第10集", comments: '升哥你也敢打，分分钟干死你', likes: 4521 },
          { episode: "第11集", comments: '女人的直觉太准了', likes: 3097 },
          { episode: "第12集", comments: '我东哥：我假发一拿你们会更不习惯😏', likes: 6174 },
        ]
      };
    }
  };
</script>
  
<style scoped>
  .fl-table {
    margin: 10px;
    border-radius: 5px;
    font-size: 12px;
    border: none;
    border-collapse: collapse;
    max-width: 100%;
    white-space: nowrap;
    word-break: keep-all;
  }
  
  .fl-table th {
    text-align: left;
    font-size: 10px;
  }
  
  .fl-table tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  
  .fl-table tr:hover td {
    background: #00d1b2;
    color: #f8f8f8;
  }
  
  .fl-table td,
  .fl-table th {
    border-style: none;
    border-top: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-bottom: 3px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    padding: 0.5em 0.55em;
    font-size: 12px;
  }
  
  .fl-table td {
    border-style: none;
    font-size: 10.5px;
    vertical-align: center;
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    height: 30px;
  }
  
  .fl-table tr:nth-child(even) {
    background: #456093;
  }
</style>
  