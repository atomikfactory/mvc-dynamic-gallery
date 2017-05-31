using Dynamic_Gallery.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using System.Web.Http.Description;
using System.Threading.Tasks;

namespace Dynamic_Gallery.Controllers
{
    public class GalleryController : ApiController
    {

        public IHttpActionResult Get()
        {
            var mappedPath = System.Web.Hosting.HostingEnvironment.MapPath("~/Galleries");

            var folders = Directory.EnumerateDirectories(mappedPath);

            var galleryList = new List<GalleryModel>();

            foreach (var galleryfolder in folders)
            {
                var folderName = new DirectoryInfo(galleryfolder).Name;

                var galleryModel = new GalleryModel()
                {
                    images = Directory.EnumerateFiles(mappedPath + @"/" + folderName)
                           .Select(fn => Path.GetFileName(fn)).ToArray(),
                    name = folderName
                };

                galleryList.Add(galleryModel);
            }




                return Json<IEnumerable<GalleryModel>>(galleryList);
        }

    }

    public class MyObjectTest
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}