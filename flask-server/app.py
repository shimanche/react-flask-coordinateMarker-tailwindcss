from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
import pandas as pd 
from io import StringIO
from checkbox_detection.checkbox_draw_save import draw_and_save
import cv2

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return 'Hello, Flask!'
  
  
@app.route('/coordinate', methods=['POST'])
def getCoordinate():
  data = request.json
  print(data)
  print('Type of data:', type(data))
  image_path = './static/image_1.jpg'  # 検出したい画像のパスを指定してください
  
  xinit = list(map(int, data["xValues"])) 
  yinit = list(map(int, data["yValues"])) 
  # 座標の組み合わせを作成
  cor = [(x, y) for x in xinit for y in yinit]
  
  save_path = draw_and_save(image_path, cor)  

  # 保存した画像のパスを返す
  return {'image_path_with_markers': save_path}
  # draw(image_path, cor)
  # return jsonify(data)
  
@app.route('/getlist',methods = ['POST'])
def getItems():
  data = request.json
  items = data.get('items',[])
  
  print("items",items)
  
  return jsonify({'message': 'Items recieved'})

@app.route('/upload',methods = ['POST'])
def upload_file():  
      try:
        file = request.files['file']  # キー名を確認して変更
        if not file:
            return jsonify({'error': 'No file provided'}), 400
        # file_content = file.read()
                # ファイルの内容を一旦読み込む
        file_content = file.read().decode('utf-8')
        # print('File content:', file_content)
        
        # pandasでCSVを解析
        df = pd.read_csv(StringIO(file_content),skipinitialspace=True)
                # 列名の中で "Unnamed" で始まる列を削除する
        df = df.loc[:, ~df.columns.str.startswith('Unnamed')]
        print(df)
        # ファイルを読み取り、pandasでCSVを解析
        # df = pd.read_csv(file)
        
        # データフレームを辞書のリストに変換
        data = df.to_dict(orient='records')
        
        # print(data)
        
        # JSON形式でデータを返す
        return jsonify(data)
           
        # return jsonify({'file_content': file_content.decode('utf-8')})
  
        
      except Exception as e:
        print('Error uploading file:', e)
        return jsonify({'error': 'Failed to upload file'}), 500

if __name__ == '__main__':
    app.run(port=8888,debug=True) #mac　Sonoma使用。デフォルトの5000番はmacで使用されているのでポート番号を変更している
    # app.run(debug=True)
