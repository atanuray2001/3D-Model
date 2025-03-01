<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three/examples/js/loaders/GLTFLoader.js"></script>

<div id="viewer"></div>

<script>
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("viewer").appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  loader.load('model.glb', function(gltf) {
    scene.add(gltf.scene);
    camera.position.z = 2;
    animate();
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
</script>
