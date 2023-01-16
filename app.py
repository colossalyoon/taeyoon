from flask import Flask, render_template, jsonify
app = Flask(__name__)

#시작화면
@app.route('/')
def hospital():
   return render_template('index.html')

@app.route("/hospitallist", methods=["GET"])
def hospital_get():
    hospital_list = list(db.hospital.find({},{'_id':False}))
    return jsonify({'hospital':hospital_list})

#검색후 화면
@app.route('/search')
def search_page():
   return render_template('search.html')

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)