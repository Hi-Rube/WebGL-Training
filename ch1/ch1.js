window.onload = function () {
  var vertexGLSL = 'attribute vec4 a_Position;\n' +
    'void main()\n' +
    '{\n' +
    'gl_Position = a_Position;\n' +
    'gl_PointSize = 6.0;\n' +
    '}\n';
  var fragmentGLSL = 'void main()\n' +
    '{\n' +
    'gl_FragColor = vec4(0.3, 0.6, 0.8, 1.0);\n' +
    '}\n';
  var gl = GLU.getContext(document.getElementById('main'));
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexGLSL);
  //编译顶点着色器
  gl.compileShader(vertexShader);
  //获取片段着色器的源代码
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  //设置片段着色器的源代码
  gl.shaderSource(fragmentShader, fragmentGLSL);
  //编译片段着色器
  gl.compileShader(fragmentShader);
  //创建着色器程序
  var program = gl.createProgram();
  //程序加入顶点着色器
  gl.attachShader(program, vertexShader);
  //程序加入片段着色器
  gl.attachShader(program, fragmentShader);
  //链接程序
  gl.linkProgram(program);
  //启用程序
  gl.useProgram(program);
  //获取attribute类型变量a_Position在内存里的位置
  var a_Position = gl.getAttribLocation(program, "a_Position");
  var i = -0.99;
  setInterval(function(){
    //将颜色缓冲区的值设置为灰色
    gl.clearColor(0.9, 0.9, 0.9, 1);
    //使用颜色缓冲区的值来填充
    gl.clear(gl.COLOR_BUFFER_BIT);
    //给a_Position赋值
    gl.vertexAttrib2f(a_Position, i, i);
    //画点
    gl.drawArrays(gl.POINTS, 0, 1);
    gl.vertexAttrib2f(a_Position, i, 0);
    gl.drawArrays(gl.POINTS, 0, 1);
    gl.vertexAttrib2f(a_Position, 0, i);
    gl.drawArrays(gl.POINTS, 0, 1);
    gl.vertexAttrib2f(a_Position, i, -i);
    gl.drawArrays(gl.POINTS, 0, 1);
    i+=0.01;
    if (i > 1){
      i = -0.99;
    }
  },1);
};
