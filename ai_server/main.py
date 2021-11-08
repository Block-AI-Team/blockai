import os
import time
from flask_cors import CORS, cross_origin
import urllib.request
import ipfsApi
from flask import Flask, flash, request, redirect, render_template
app = Flask(__name__)
from werkzeug.utils import secure_filename
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = ipfsApi.Client('api-dl-ipfs.dlunify.dltlabs.com', 80)
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['POST'])
@cross_origin()
def upload_file():
# Use below command to use the AI Model. Currently for demo video code is not integrated.
# python demo_prog.py --img_path ./test_images/virat.jpeg --canvas_color 'white' --max_m_strokes 500 --max_divide 5 --renderer oilpaintbrush --renderer_checkpoint_dir checkpoints_G_oilpaintbrush_light --net_G zou-fusion-net-ligh
	if request.method == 'POST':
		time.sleep(30) # Ideally request should be handled by AI model real time. Command integration can be done later.
		hash = api.add('output/virat.mp4')
		return dict(value = hash)
            
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9999)