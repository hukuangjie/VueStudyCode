<template>

<!-- vue的模板里面 所有的内容要被一个根节点包含起来  -->

  <div id="app">  
    
      <h2>{{msg}}</h2>

      <br>
      这是一个根组件

    <br>

    <h3>{{obj.name}}</h3>

    <br>
    <hr>

    <br />

    <ul>
      <li v-for="item in list">
          {{item}}
      </li>
    </ul>

    <br>
    <hr>

    <br />

    <ul>
      <li v-for="item in list1">
          {{item.title}}
      </li>
    </ul>


     <br>
      <hr>

      <br />

      <ul>
        <li v-for="item in list2">
            {{item.cate}}

            <ol>
              <li v-for="news in item.list">
                  {{news.title}}
              </li>
            </ol>

        </li>
      </ul>

  </div>
</template>

<script>
    export default {     
      data () {  /*业务逻辑里面定义的数据*/
        return {
          msg: '你好vue',
          obj:{
            name:"张三"
          },
          list:['111','222','333'],
          list1:[
            {'title':'11111'},
            {'title':'222'},
            {'title':'333333'},
            {'title':'44444'}
          ],
          list2:[
              {
                "cate":"国内新闻",
                "list":[

                   {'title':'国内新闻11111'},
                   {'title':'国内新闻2222'}
                ]
              },
              {
                "cate":"国际新闻",
                "list":[

                   {'title':'国际新闻11111'},
                   {'title':'国际新闻2222'}
                ]
              }

          ]

        }
      }
    }
</script>


<style lang="scss">


</style>
