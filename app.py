from flask import Flask, render_template, jsonify, request
app = Flask(__name__)


#시작화면
@app.route('/')
def main():
   return render_template('index.html')

@app.route("/hospitallist/<search>", methods=["GET"])
def hospital_get():
   area = request.args.get('area')
   print(area)
   # with open('hospital.json') as f:
      # data = json.load(f)

#검색후 화면
@app.route('/search')
def search_page():
   area = request.args.get('area')
   print(area)
   return render_template('search.html')

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)